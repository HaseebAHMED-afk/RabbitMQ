const amqp = require('amqplib');

const QUEUE_NAME_1 = 'detectChange';

async function setupRabbitMQ() {
  try {
    // Connect to RabbitMQ server
    const connection = await amqp.connect('amqp://localhost'); // Update the URL if your RabbitMQ server is running on a different host/port

    // Create a channel
    const channel = await connection.createChannel();

    // Create two queues
    await channel.assertQueue(QUEUE_NAME_1, { durable: false });

    console.log('RabbitMQ setup complete');

    // Now you have a connection, channel, and queues ready to use
    // You can save the connection and channel for later use
    return { connection, channel };
  } catch (error) {
    console.error('Error setting up RabbitMQ:', error);
    throw error;
  }
}

module.exports = setupRabbitMQ;
