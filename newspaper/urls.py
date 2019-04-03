from django.contrib import admin
from django.conf.urls import url, include
from newspaper.views import FrontendAppView


urlpatterns = [
url(r'^$', FrontendAppView.as_view()),
    url(r'^blog/', include('blog.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
