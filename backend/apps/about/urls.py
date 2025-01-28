from rest_framework.routers import DefaultRouter
from .viewsets import ExampleViewSet

router = DefaultRouter()

router.register("example", ExampleViewSet)

urlpatterns = router.urls