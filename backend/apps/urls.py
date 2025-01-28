from django.urls import include, path

urlpatterns = [
    path("about/", include("apps.about.urls")),
]
