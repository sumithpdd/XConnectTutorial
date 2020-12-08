# Node js xConnect

## Create Pem files for pfx

``` openssl pkcs12 -in con-xp10single-poc_xconnect_client.pfx -nocerts -out privatekey.pem -nodes ```

``` openssl pkcs12 -in con-xp10single-poc_xconnect_client.pfx -nokeys -out publiccert.pem -nodes ```
