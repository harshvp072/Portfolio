import Message from '../models/Message.js';
import sendEmail from '../utils/sendEmail.js';

export const sendMessage = async (req, res, next) => {
  try {
    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      res.status(400);
      throw new Error('Please fill in all required fields');
    }

    const newMessage = await Message.create({
      name,
      email,
      company,
      message,
    });

    // --- NEW: Send Email Notification ---
    const emailTemplate = `
      <h3>New Portfolio Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    try {
      await sendEmail({
        subject: `New Job Opportunity from ${name} at ${company || 'Unknown Company'}`,
        html: emailTemplate,
      });
    } catch (emailError) {
      console.error('Message saved, but email failed to send:', emailError);
      // We still want to return a 201 since the DB save was successful
    }
    // -------------------------------------

    res.status(201).json({
      success: true,
      data: newMessage,
      message: 'Your message has been sent successfully. I will get back to you soon!',
    });

  } catch (error) {
    next(error);
  }
};