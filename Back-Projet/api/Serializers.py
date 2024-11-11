from rest_framework import serializers
from .models import *


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ("name", "description", "startDate", "endDate", "comments", "status")
