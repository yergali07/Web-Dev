from django.conf import settings
from django.contrib.auth.hashers import make_password
from django.db import migrations


def create_default_superuser(apps, schema_editor):
    User = apps.get_model(*settings.AUTH_USER_MODEL.split('.'))
    User.objects.update_or_create(
        username='admin',
        defaults={
            'email': 'admin@example.com',
            'is_staff': True,
            'is_superuser': True,
            'is_active': True,
            'password': make_password('admin12345'),
        },
    )


def remove_default_superuser(apps, schema_editor):
    User = apps.get_model(*settings.AUTH_USER_MODEL.split('.'))
    User.objects.filter(username='admin').delete()


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0002_seed_store_data'),
    ]

    operations = [
        migrations.RunPython(create_default_superuser, remove_default_superuser),
    ]
