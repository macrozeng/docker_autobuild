#
FROM docker.io/centos
MAINTAINER Marco Zeng

ENV DATA_DIR /var/lib/mysql

# Install Mariadb
RUN yum install -y mariadb mariadb-server && \
    yum clean all

ADD mysqld_charset.cnf /etc/my.cnf.d/
COPY scripts /scripts
RUN chmod +x /scripts/start

EXPOSE 3306

VOLUME ["/var/lib/mysql"]


ENTRYPOINT ["/scripts/start"]
