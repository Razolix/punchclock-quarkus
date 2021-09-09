package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Ticket;
import ch.zli.m223.punchclock.service.TicketService;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/tickets")
@Tag(name = "Tickets", description = "Handling of tickets")
//@RolesAllowed({ "Admin" })
public class TicketController {

    @Inject
    TicketService ticketService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Ticket> list() {
        return ticketService.findAll();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Ticket add(Ticket ticket) {
        return ticketService.createTicket(ticket);
    }

    @DELETE
    @Path("/{id}")
    public void remove(@PathParam Long id) {
        ticketService.removeTicket(id);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{id}")
    public Ticket get(@PathParam Long id) {
        return ticketService.getTicket(id);
    }

    @PUT
    public void update(Ticket ticket) {
        ticketService.updateTicket(ticket);
    }
}
