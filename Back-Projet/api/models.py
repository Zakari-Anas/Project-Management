from django.db import models

# Create your models here.
from django.db import models

# Create your models here.


class Project(models.Model):
    name = models.CharField(unique=True, max_length=100)
    description = models.TextField()
    startDate = models.DateField()
    endDate = models.DateField()
    comments = models.CharField(max_length=100, blank=True, null=True)
    status = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
