#!/bin/bash
# wait-for-it.sh

set -e

host="$1"
shift
cmd="$@"

until nc -z $host; do
    echo "Waiting for the database at $host..."
    sleep 10
done

>&2 echo "Database at $host is up - executing command"
exec $cmd
