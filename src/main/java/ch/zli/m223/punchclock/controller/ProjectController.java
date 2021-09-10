package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Project;
import ch.zli.m223.punchclock.service.ProjectService;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Projekt Entity
 */
@Path("/projects")
@Tag(name = "Projects", description = "Handling of projects")
//@RolesAllowed({ "Admin" })
public class ProjectController {

    /**
     * Injection ProjektService
     */
    @Inject
    ProjectService projectService;

    /**
     * Projekt holen
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Project> list() {
        return projectService.findAll();
    }

    /**
     * Projekt hinzufügen
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Project add(Project project) {
        return projectService.createProject(project);
    }

    /**
     * Projekt entfernen
     */
    @DELETE
    @Path("/{id}")
    public void remove(@PathParam Long id) {
        projectService.removeProject(id);
    }

    /**
     * Gewünschtes Projekt holen
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{id}")
    public Project get(@PathParam Long id) {
        return projectService.getProject(id);
    }

    /**
     * Projekt updaten
     */
    @PUT
    public void update(Project project) {
        projectService.updateProject(project);
    }
}
