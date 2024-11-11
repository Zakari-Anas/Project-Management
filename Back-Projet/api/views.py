from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .models import *
from .Serializers import *
from rest_framework.response import Response

# Create your views here.


def home(request):
    return HttpResponse("Hello, this is home page!")


class projectManagerViewSet(viewsets.ViewSet):

    permissions_classes = [permissions.AllowAny]
    queryset = ProjectManager.objects.all()
    serializers_class = ProjectManagerSerializer

    def list(self, request):
        ProjectManagersList = self.queryset.all()
        # ProjectList = self.queryset
        serializer = self.serializers_class(ProjectManagersList, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializers_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        serializer = self.serializers_class(self.queryset.get(id=pk))
        if serializer:
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def update(self, request, pk=None):
        serializer = self.serializers_class(self.queryset.get(id=pk), data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        project = self.queryset.get(id=pk)
        project.delete()
        return Response(status=204)


class projectViewSet(viewsets.ViewSet):

    permissions_classes = [permissions.AllowAny]
    queryset = Project.objects.all()
    serializers_class = ProjectSerializer

    def list(self, request):
        ProjectList = self.queryset.all()
        # ProjectList = self.queryset
        serializer = self.serializers_class(ProjectList, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = self.serializers_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        serializer = self.serializers_class(self.queryset.get(id=pk))
        if serializer:
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def update(self, request, pk=None):
        serializer = self.serializers_class(self.queryset.get(id=pk), data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        project = self.queryset.get(id=pk)
        project.delete()
        return Response(status=204)
