from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# django rest framework -> router -> url

router = DefaultRouter()
router.register('id1', views.ID1ViewSet)
router.register('id2', views.ID2ViewSet)
router.register('id3', views.ID3ViewSet)
router.register('npoem', views.NpoemViewSet)

urlpatterns = [
    path('', include(router.urls)),
]