#!/bin/bash
# wait-for-it.sh

set -e

host="$1"
shift
cmd="$@"

until nc -z user_db 3306; do
    echo "Waiting for MySQL..."
    sleep 10
done

>&2 echo "MySQL is up - executing command"
exec $cmd
