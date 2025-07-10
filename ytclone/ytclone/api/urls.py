from django.urls import path
from .views import VideoListCreateView, VideoDetailView, Register, Login

urlpatterns = [
    path('videos/', VideoListCreateView.as_view(), name='video-list-create'),
    path('videos/<int:pk>/', VideoDetailView.as_view(), name='video-detail'),
    path('register/', Register.as_view(), name='register'),
    path('login/', Login.as_view(), name='login'),
]
