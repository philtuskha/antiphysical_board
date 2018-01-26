from django.conf.urls import url
from django.contrib.auth import views

from .views import MainIndex, FakeAPI

urlpatterns = [
    url(r'^index/$', MainIndex.as_view()),
    url(r'^api/$', FakeAPI.as_view()),
]