# Generated by Django 4.2.1 on 2023-06-12 21:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("frontend", "0003_alter_book_publisher"),
    ]

    operations = [
        migrations.AlterField(
            model_name="book",
            name="published",
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
