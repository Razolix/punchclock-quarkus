package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.ViewModel.LoginResultViewModel;
import ch.zli.m223.punchclock.ViewModel.LoginViewModel;
import ch.zli.m223.punchclock.domain.Employee;
import ch.zli.m223.punchclock.service.EmployeeService;
import io.smallrye.jwt.build.Jwt;
import org.eclipse.microprofile.jwt.Claims;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.time.Duration;
import java.util.Arrays;
import java.util.HashSet;

/*
 * Do not use in productive environments!
 */

@Tag(name = "Authorization", description = "Sample to manage Authorization")
@Path("/auth")
public class AuthentificationController {

    /**
     * EmployeeService Injection
     */
    @Inject
    EmployeeService employeeService;

    /**
     * Login
     * @param loginViewModel
     * @return
     */
    @POST
    @Path("/login")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public LoginResultViewModel login(LoginViewModel loginViewModel) {
        Employee employee = employeeService.getUserByEmailPassword(loginViewModel.getUsername(), loginViewModel.getPassword());
        /**
         * Wenn Username und Passwort stimmt dann Token
         */
        if (loginViewModel.getUsername().equals(employee.getUserName()) && loginViewModel.getPassword().equals(employee.getPassword())) {
            String token =
                    Jwt.issuer("https://zli.ch/issuer")
                            .upn("user@zli.ch")
                            .groups(new HashSet<>(Arrays.asList("Admin")))
                            .claim(Claims.birthdate.name(), "2001-07-13")
                            .expiresIn(Duration.ofHours(1))
                            .sign();
            return new LoginResultViewModel(token);
        }
        throw new NotAuthorizedException("User [" + loginViewModel.getUsername() + "] not known");
    }

    /**
     * SingnUp Employee
     * @param employee
     */
    @POST
    @Path("/signUp")
    @Consumes(MediaType.APPLICATION_JSON)
    public void signUp(Employee employee) {
        /**
         * Neuen Employee erstellen
         */
        employeeService.createEmployee(employee);
    }
}

