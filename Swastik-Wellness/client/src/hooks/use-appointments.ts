import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertAppointment } from "@shared/routes";

export function useCreateAppointment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: InsertAppointment) => {
      // Validate with Zod schema from routes before sending
      const validated = api.appointments.create.input.parse(data);
      
      const res = await fetch(api.appointments.create.path, {
        method: api.appointments.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.appointments.create.responses[400].parse(await res.json());
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("Failed to book appointment");
      }

      return api.appointments.create.responses[201].parse(await res.json());
    },
    // Invalidate list query if we were to show a list of appointments
    onSuccess: () => {
      // If we had an admin view, we'd invalidate this:
      // queryClient.invalidateQueries({ queryKey: [api.appointments.list.path] });
    },
  });
}
