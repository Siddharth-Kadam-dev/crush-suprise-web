from django.shortcuts import render, redirect
from .models import Response


def home(request):

    if request.method == "POST":
        message = request.POST.get("message", "").strip()

        if message:
            Response.objects.create(message=message)

        return redirect("home")

    return render(request, "index.html")
