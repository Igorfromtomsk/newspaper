from django.views.generic.base import TemplateView
import os
from django.http import HttpResponse
from django.conf import settings


class FrontendAppView(TemplateView):

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            return HttpResponse(
                status=501,
            )
