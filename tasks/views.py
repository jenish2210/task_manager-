from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, permissions
from .models import Task
from .serializers import TaskSerializer

class TaskListCreateView(generics.ListCreateAPIView):

    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):

        queryset = Task.objects.filter(user=self.request.user)

        completed = self.request.query_params.get('completed')

        if completed:
            queryset = queryset.filter(
                completed=completed.lower() == 'true'
            )

        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class TaskDetailView(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)

    def update(self, request, *args, **kwargs):

        partial = True

        instance = self.get_object()

        serializer = self.get_serializer(
            instance,
            data=request.data,
            partial=partial
        )

        serializer.is_valid(raise_exception=True)

        serializer.save()

        return Response(serializer.data)