# Generated by Django 4.2.1 on 2023-06-06 21:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("frontend", "0008_rename_summery_books_summary"),
    ]

    operations = [
        migrations.CreateModel(
            name="Book",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("source_id", models.IntegerField(blank=True, default=0)),
                ("title", models.CharField(max_length=64)),
                ("author", models.CharField(max_length=64)),
                ("cover", models.CharField(blank=True, max_length=200)),
                ("url", models.CharField(blank=True, max_length=200)),
                ("summary", models.CharField(blank=True, max_length=1500)),
                ("source_published", models.DateTimeField(blank=True)),
                ("published", models.DateTimeField(blank=True)),
            ],
        ),
        migrations.RenameModel(
            old_name="Categories",
            new_name="Genre",
        ),
        migrations.DeleteModel(
            name="Books",
        ),
        migrations.AddField(
            model_name="book",
            name="genres",
            field=models.ManyToManyField(blank=True, to="frontend.genre"),
        ),
        migrations.AddField(
            model_name="book",
            name="publisher",
            field=models.ManyToManyField(blank=True, to="frontend.publisher"),
        ),
    ]