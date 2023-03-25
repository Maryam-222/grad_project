from .models import HeartDisease
from rest_framework import serializers


class HeartSerializer(serializers.ModelSerializer):
    result = serializers.SerializerMethodField()
    submitted_time = serializers.SerializerMethodField()

    class Meta:
        model = HeartDisease
        fields = ['first_name', 'last_name', 'HighBP', 'HighChol', 'CholCheck', 'BMI', 'Smoker', 'Stroke', 'Diabetes',
                  'PhysActivity', 'Fruits', 'Veggies', 'HvyAlcoholConsump', 'AnyHealthcare', 'NoDocbcCost', 'GenHlth',
                  'MentHlth', 'PhysHlth', 'DiffWalk', 'Sex', 'Age', 'Education', 'Income', 'result', 'submitted_time']

    def get_result(self, obj):
        return obj.result

    def get_submitted_time(self, obj):
        return obj.submitted_time.strftime('%d %b %Y')


class HeartSerializerList(serializers.ModelSerializer):
    prediction = serializers.SerializerMethodField()
    submitted_time = serializers.SerializerMethodField()

    class Meta:
        model = HeartDisease
        fields = ['first_name', 'last_name', 'HighBP', 'HighChol', 'prediction', 'submitted_time']

    def get_prediction(self, obj):
        return obj.result

    def get_submitted_time(self, obj):
        return obj.submitted_time.strftime('%d %b %Y')
