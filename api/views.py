from django.http import JsonResponse
from django.views.generic import TemplateView
from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from api.models import MiniChatMessage, Post, Comment
from api.serializers import MiniChatMessageSerializer, PostSerializer, CommentSerializer, CreateCommentSerializer, \
    CreateTopicSerializer, CreateMiniChatMessageSerializer, CreatePostSerializer
from users.models import User
from users.serializers import UserSerializer, RegisterUserSerializer
from .models import Topic
from .serializers import TopicSerializer


class HomeView(TemplateView):
    template_name = 'api/home.html'


class TopicView(APIView):
    """Topics"""

    def get(self, request):
        section = request.GET.get('section')
        topic_id = request.GET.get('topicID')
        if request.GET.get('searchBy'):
            return self.search_logic()
        if section:
            topics = Topic.objects.filter(section=section)
            serializer = TopicSerializer(topics, many=True)
            return Response(serializer.data)
        topics = Topic.objects.all()
        serializer = TopicSerializer(topics, many=True)
        return Response(serializer.data)

    def post(self, request):
        topic = CreateTopicSerializer(data=request.data)
        if topic.is_valid():
            topic = topic.save(author=request.user)
            return Response({'success': True,
                             'topic_id': topic.id},
                            status=status.HTTP_201_CREATED)
        else:
            return Response({'success': False,
                             'errors': topic.error_messages})

    def search_logic(self):
        search_data = self.request.GET
        search_by = search_data['searchBy']
        if search_by == 'title':
            topic_exists = Topic.objects.filter(title=search_data['value'],
                                                section=search_data['section']).exists()
            return Response(data={'topic_exists': topic_exists})
        return Response(status=status.HTTP_400_BAD_REQUEST)


class GetTopicView(APIView):
    """Get topic by id"""

    def get(self, request, *args, **kwargs):
        topic_id = kwargs.get('topic_id')
        if topic_id:
            topic = Topic.objects.get(id=topic_id)
            topic = TopicSerializer(topic)
            return Response(data=topic.data)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class MiniChatMessagesView(APIView):
    """Mini Chat Messages Get View"""

    @staticmethod
    def get(request):
        mini_chat_messages = MiniChatMessage.objects.all()
        serializer = MiniChatMessageSerializer(mini_chat_messages, many=True)
        return Response(serializer.data)

    def post(self, request):
        mini_chat_message = CreateMiniChatMessageSerializer(data=request.data)
        if mini_chat_message.is_valid():
            mini_chat_message.save(author=request.user)
            return Response({'success': True})
        else:
            return Response({'success': False,
                             'errors': mini_chat_message.error_messages})


class PostsView(APIView):
    """Mini Chat Messages Get View"""

    @staticmethod
    def get(request):
        topic = request.GET.get('topic')
        posts = Post.objects.filter(topic=topic)
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request):
        post = CreatePostSerializer(data=request.data)
        if post.is_valid():
            post.save(author=request.user)
            return Response({'success': True})
        else:
            return Response({'success': False,
                             'errors': post.error_messages})


class CommentsView(APIView):
    """Mini Chat Messages Get View"""

    @staticmethod
    def get(request):
        post = request.GET.get('post')
        comments = Comment.objects.filter(post=post)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    def post(self, request):
        comment = CreateCommentSerializer(data=request.data)
        if comment.is_valid():
            comment.save(author=request.user)
            return Response({'success': True})
        else:
            return Response({'success': False,
                             'errors': comment.error_messages})


class UserProfileView(APIView):
    """User Profile View"""

    @staticmethod
    def get(request, *args, **kwargs):
        user_id = kwargs.get('id')
        user = User.objects.filter(id=user_id)
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data)


class GetUserView(APIView):
    """Fetch user view"""

    @staticmethod
    def get(request, *args, **kwargs):
        token = Token.objects.get(key=request.GET.get('auth_token'))
        user = User.objects.get(auth_token=token)
        serializer = UserSerializer(user)
        return Response(serializer.data)


class UsersView(APIView):
    """All Users View"""
    authentication_classes = [TokenAuthentication]

    @staticmethod
    def get(request, *args, **kwargs):
        if request.GET.get('email'):
            # Uses in registration process. Checks if email is unique
            users = User.objects.filter(email=request.GET.get('email'))
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)
        elif request.GET.get('username'):
            users = User.objects.filter(username=request.GET.get('username'))
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)


class RegistrationView(APIView):

    permission_classes = [AllowAny]

    @staticmethod
    def post(request, *args, **kwargs):
        data = request.data
        user_serializer = RegisterUserSerializer(data=data)
        if user_serializer.is_valid():
            user = User.objects.create_user(
                **user_serializer.data
            )
            token = Token.objects.get(user=user)
            return JsonResponse(data={'auth_token': token.key})
        return JsonResponse(status=status.HTTP_400_BAD_REQUEST,
                            data={'error': user_serializer.errors})