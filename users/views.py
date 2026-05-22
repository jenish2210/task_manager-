from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework import status


@api_view(['POST'])
def register(request):

    username = request.data.get('username')
    password = request.data.get('password')

    
    if not username:
        return Response(
            {'error': 'Username is required'},
            status=status.HTTP_400_BAD_REQUEST
        )

    
    if not password:
        return Response(
            {'error': 'Password is required'},
            status=status.HTTP_400_BAD_REQUEST
        )

    
    if User.objects.filter(username=username).exists():
        return Response(
            {'error': 'User already exists'},
            status=status.HTTP_400_BAD_REQUEST
        )

   
    User.objects.create_user(
        username=username,
        password=password
    )

    return Response(
        {'message': 'User created successfully'},
        status=status.HTTP_201_CREATED
    )
