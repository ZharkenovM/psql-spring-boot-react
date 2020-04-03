package kz.gov.zerde.postgresql;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class PostgresqlApplication extends SpringBootServletInitializer {

	/*@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(PostgresqlApplication.class);
	}*/

	public static void main(String[] args) {
		SpringApplication.run(PostgresqlApplication.class, args);
	}

}
