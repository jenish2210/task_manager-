from django.contrib import admin
from django.urls import path, include

from users.views import register

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import (
    home,
    login_page,
    register_page,
    dashboard
)

urlpatterns = [

    path('', home),

    path('login/', login_page),

    path('register-page/', register_page),

    path('dashboard/', dashboard),

    path('admin/', admin.site.urls),

    path('api/register/', register),

    path('api/login/', TokenObtainPairView.as_view()),

    path('api/token/refresh/', TokenRefreshView.as_view()),

    path('api/', include('tasks.urls')),
]