from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class Publisher(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self) -> str:
        return f"{self.pk}, {self.name}"


class Genre(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self) -> str:
        return f"{self.pk}, {self.name}"


class Book(models.Model):
    source_id = models.IntegerField(default=0, blank=True)
    title = models.CharField(max_length=64)
    author = models.CharField(max_length=64)
    cover = models.CharField(max_length=200, blank=True)
    url = models.CharField(max_length=200, blank=True)
    summary = models.CharField(max_length=1500, blank=True)
    source_published = models.DateTimeField(blank=True)
    published = models.DateTimeField(blank=True)
    publisher = models.ManyToManyField(Publisher, blank=True)
    genres = models.ManyToManyField(Genre, blank=True)

    def __str__(self) -> str:
        return f"{self.pk}, {self.title}, {self.author}"
