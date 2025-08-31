import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required").max(1000, "Message is too long")
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      console.log("Contact form submission:", validatedData);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.json({ 
        success: true, 
        message: "Message sent successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}