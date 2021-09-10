package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Employee;
import ch.zli.m223.punchclock.service.EmployeeService;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Employee entity
 */
@Path("/employees")
@Tag(name = "Employees", description = "Handling of employees")
//@RolesAllowed({"Admin"})
public class EmployeeController {

    /**
     * EmployeeService Injection
     */
    @Inject
    EmployeeService employeeService;

    /**
     * Employees anzeigen
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Employee> list() {
        return employeeService.findAll();
    }

    /**
     * Employee hinzufügen
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Employee add(Employee employee) {
        return employeeService.createEmployee(employee);
    }

    /**
     * Employee entfernen
     */
    @DELETE
    @Path("/{id}")
    public void remove(@PathParam Long id) {
        employeeService.removeEmployee(id);
    }

    /**
     * Gewünschten Employee hinzufügen
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{id}")
    public Employee get(@PathParam Long id) {
        return employeeService.getEmployee(id);
    }

    /**
     * Employee update
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void update(Employee employee) {
        employeeService.updateEmployee(employee);
    }
}
