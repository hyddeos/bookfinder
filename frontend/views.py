from django.shortcuts import render

# Create your views here.


def index(request):
    print("hejsan")
    return render(
        request,
        "frontend/index.html",
        {
            "test": "hesjsan",
        },
    )
