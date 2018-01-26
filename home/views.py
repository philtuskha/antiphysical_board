from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views.generic import TemplateView


class MainIndex(TemplateView):
    template_name = "home/index.html"

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)

class FakeAPI(TemplateView):
    template_name = "api/call1.html"

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name)