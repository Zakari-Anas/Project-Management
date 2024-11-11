from django.db import models

# Create your models here.
from django.db import models

# Create your models here.


class ProjectManager(models.Model):
    name = models.CharField(unique=True, max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(unique=True, max_length=100)
    ProjectManager = models.ForeignKey(
        ProjectManager, on_delete=models.CASCADE, blank=True, null=True
    )
    description = models.TextField()
    startDate = models.DateField()
    endDate = models.DateField()
    comments = models.CharField(max_length=100, blank=True, null=True)
    status = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
