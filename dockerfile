FROM python:3.11-slim

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

CMD python manage.py runserver