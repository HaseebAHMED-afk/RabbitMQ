const amqp = require('amqplib');

const QUEUE_NAME = 'detectChange'; // Replace with the name of the queue you want to consume messages from

async function setupReceiver() {
  try {
    const connection = await amqp.connect('amqp://localhost'); // Replace with your RabbitMQ server URL if needed
    const channel = await connection.createChannel();

    await channel.assertQueue(QUEUE_NAME, { durable: false });

    console.log(`Waiting for messages in ${QUEUE_NAME}. To exit, press CTRL+C`);

    channel.consume(
      QUEUE_NAME,
      (message) => {
        const content = JSON.parse(message.content.toString());
        console.log(content);
      },
      { noAck: true } // Auto-acknowledging messages
    );
  } catch (error) {
    console.error('Error setting up RabbitMQ receiver:', error.message);
    throw error;
  }
}

setupReceiver();
