# Generated by Django 4.1 on 2023-03-21 01:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("myapp", "0004_alter_heartdisease_anyhealthcare_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="heartdisease",
            name="result",
            field=models.BooleanField(null=True),
        ),
    ]