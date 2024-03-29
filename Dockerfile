ARG PYTHON_VERSION=3.11-slim-bullseye

FROM python:${PYTHON_VERSION}

WORKDIR /store_backend

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONIOENCODING=UTF-8
ENV SHELL=/bin/sh LANG=en_US.UTF-8

RUN apt-get update && \
  apt-get install -y \
  build-essential \
  libpq-dev \
  python3-dev

COPY requirements.txt /store_backend/
RUN pip install -r requirements.txt

COPY . /store_backend/

EXPOSE 8000

# TODO: replace demo.wsgi with <project_name>.wsgi
CMD ["gunicorn", "--bind", ":8000", "--workers", "2", "store_backend.wsgi"]
