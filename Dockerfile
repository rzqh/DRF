From library/python:latest
#set Buffered python
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
#Membuat Environtment
ENV VIRTUAL_ENV=/opt/env
Run python -m venv $VIRTUAL_ENV
#Menjalankan Environtment
ENV PATH="$VIRTUAL_ENV/bin:$PATH"

#Proses update dependency di sistem operasi
RUN apt update

#setup working directory

RUN mkdir /app
RUN ls /app
WORKDIR /app 

# install dependency
RUN pip install --upgrade pip

#copy requirements
ADD . /app/
RUN pip install -r requirements.txt --no-cache-dir