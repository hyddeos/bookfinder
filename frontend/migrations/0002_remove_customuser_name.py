# Generated by Django 4.2.1 on 2023-06-02 22:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("frontend", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="customuser",
            name="name",
        ),
    ]