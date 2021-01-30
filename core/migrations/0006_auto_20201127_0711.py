# Generated by Django 2.2.4 on 2020-11-27 07:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_orderitem_item_variations'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('S', 'Services'), ('SW', 'Sport wear'), ('OW', 'Outwear')], max_length=2),
        ),
    ]