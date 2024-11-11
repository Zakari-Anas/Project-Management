from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter


router = DefaultRouter()

router.register("project", projectViewSet, basename="project")
router.register("projectManager", projectManagerViewSet, basename="projectManager")


urlpatterns = router.urls

# urlpatterns = [
#     path("", home),
# ]
