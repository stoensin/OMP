# Generated by Django 3.1.4 on 2022-01-12 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('db_models', '0011_auto_20220112_1607'),
    ]

    operations = [
        migrations.AddField(
            model_name='backuphistory',
            name='created',
            field=models.DateTimeField(auto_now_add=True, help_text='创建时间', null=True, verbose_name='创建时间'),
        ),
        migrations.AddField(
            model_name='backuphistory',
            name='modified',
            field=models.DateTimeField(auto_now=True, help_text='更新时间', null=True, verbose_name='更新时间'),
        ),
    ]
