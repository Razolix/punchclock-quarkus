package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Employee;
import ch.zli.m223.punchclock.service.EmployeeService;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/employees")
@Tag(name = "Employees", description = "Handling of employees")
//@RolesAllowed({"Admin"})
public class EmployeeController {

    @Inject
    EmployeeService employeeService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Employee> list() {
        return employeeService.findAll();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Employee add(Employee employee) {
        return employeeService.createEmployee(employee);
    }

    @DELETE
    @Path("/{id}")
    public void remove(@PathParam Long id) {
        employeeService.removeEmployee(id);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{id}")
    public Employee get(@PathParam Long id) {
        return employeeService.getEmployee(id);
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void update(Employee employee) {
        employeeService.updateEmployee(employee);
    }
}
