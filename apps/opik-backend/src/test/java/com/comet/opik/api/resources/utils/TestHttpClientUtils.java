package com.comet.opik.api.resources.utils;

import com.comet.opik.infrastructure.auth.AuthModule;
import jakarta.ws.rs.client.Client;
import jakarta.ws.rs.client.ClientBuilder;
import lombok.experimental.UtilityClass;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.TrustSelfSignedStrategy;
import org.apache.http.ssl.SSLContextBuilder;

@UtilityClass
public class TestHttpClientUtils {

    public static final io.dropwizard.jersey.errors.ErrorMessage UNAUTHORIZED_RESPONSE = new io.dropwizard.jersey.errors.ErrorMessage(
            401, "User not allowed to access workspace");

    public static Client client() {
        try {
            return ClientBuilder.newBuilder()
                    .sslContext(SSLContextBuilder.create()
                            .loadTrustMaterial(new TrustSelfSignedStrategy())
                            .build())
                    .hostnameVerifier(NoopHostnameVerifier.INSTANCE)
                    .build();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static AuthModule testAuthModule() {
        return new AuthModule() {
            @Override
            public Client client() {
                return TestHttpClientUtils.client();
            }
        };
    }

}