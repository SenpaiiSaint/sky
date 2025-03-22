import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-300">
      <Head>
        <title>Sky - Elevate Your Projects</title>
        <meta name="description" content="Manage your tasks and collaborate effortlessly with Sky." />
      </Head>

      {/* Marketing Header */}
      <header className="py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-5xl font-extrabold">Sky</h1>
          <p className="mt-4 text-white text-lg">
            Your ultimate project management solution. Simplify, organize, and elevate your workflow.
          </p>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="container mx-auto flex flex-col items-center justify-center text-center py-16 px-4">
          <h2 className="text-white text-5xl font-extrabold mb-4">
            Elevate Your Projects to New Heights
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl">
            With Sky, experience seamless task management and real-time collaboration that propels your projects forward.
          </p>
          <Link href="/login">
            <button className="cursor-pointer bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
              Get Started
            </button>
          </Link>
        </section>

        {/* Integrated Features / "Why Choose Sky?" Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white">Why Choose Sky?</h3>
            <p className="mt-2 text-white text-lg">
              Sky is engineered to transform how you manage projects and collaborate with your team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-black/40 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-white">Intuitive Interface</h4>
              <p className="mt-2 text-gray-200">
                Navigate effortlessly through a clean, user-friendly design that simplifies project management.
              </p>
            </div>
            <div className="p-6 bg-black/40 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-white">Real-Time Collaboration</h4>
              <p className="mt-2 text-gray-200">
                Connect with your team instantly and keep everyone in sync, no matter where they are.
              </p>
            </div>
            <div className="p-6 bg-black/40 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-white">Scalable Solutions</h4>
              <p className="mt-2 text-gray-200">
                Whether you're a startup or an enterprise, Sky adapts to your evolving project needs.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center text-white mb-8">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-black/40 rounded-lg shadow-md">
                <p className="text-gray-200 italic">
                  "Sky has revolutionized the way we manage our projects. The intuitive design and real-time features keep our team on track!"
                </p>
                <p className="mt-4 text-white font-semibold">— Alex R., CEO of InnovateX</p>
              </div>
              <div className="p-6 bg-black/40 rounded-lg shadow-md">
                <p className="text-gray-200 italic">
                  "Our productivity has soared since we started using Sky. It's like having a personal assistant for all our project tasks."
                </p>
                <p className="mt-4 text-white font-semibold">— Jamie L., Project Manager at TechFusion</p>
              </div>
              <div className="p-6 bg-black/40 rounded-lg shadow-md">
                <p className="text-gray-200 italic">
                  "The seamless integration and collaborative tools have made Sky an indispensable part of our workflow."
                </p>
                <p className="mt-4 text-white font-semibold">— Morgan S., COO at CreativeEdge</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Choose Your Plan</h3>
            <p className="text-white mb-10">
              Flexible pricing plans tailored to fit your business needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-black/40 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-white">Basic</h4>
                <p className="mt-4 text-gray-200">$9/month</p>
                <ul className="mt-4 text-gray-200 space-y-2">
                  <li>Essential features</li>
                  <li>Up to 5 projects</li>
                  <li>Email support</li>
                </ul>
                <button className="mt-6 w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Select Plan
                </button>
              </div>
              <div className="p-6 bg-black/40 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-white">Pro</h4>
                <p className="mt-4 text-gray-200">$29/month</p>
                <ul className="mt-4 text-gray-200 space-y-2">
                  <li>All basic features</li>
                  <li>Unlimited projects</li>
                  <li>Priority support</li>
                  <li>Advanced analytics</li>
                </ul>
                <button className="mt-6 w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Select Plan
                </button>
              </div>
              <div className="p-6 bg-black/40 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-white">Enterprise</h4>
                <p className="mt-4 text-gray-200">Contact Us</p>
                <ul className="mt-4 text-gray-200 space-y-2">
                  <li>Custom solutions</li>
                  <li>Dedicated support</li>
                  <li>Advanced integrations</li>
                  <li>Team training</li>
                </ul>
                <button className="mt-6 w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center text-white mb-8">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div className="border-b border-white/30 pb-4">
                <h4 className="text-xl font-semibold text-white">What is Sky?</h4>
                <p className="mt-2 text-gray-200">
                  Sky is a cutting-edge project management tool designed to streamline task management and foster real-time collaboration.
                </p>
              </div>
              <div className="border-b border-white/30 pb-4">
                <h4 className="text-xl font-semibold text-white">How does Sky improve team productivity?</h4>
                <p className="mt-2 text-gray-200">
                  By offering an intuitive interface and seamless integration with your favorite tools, Sky helps teams stay organized and on track.
                </p>
              </div>
              <div className="border-b border-white/30 pb-4">
                <h4 className="text-xl font-semibold text-white">Can I upgrade or downgrade my plan?</h4>
                <p className="mt-2 text-gray-200">
                  Yes, you can easily upgrade or downgrade your subscription plan based on your evolving business needs.
                </p>
              </div>
              <div className="border-b border-white/30 pb-4">
                <h4 className="text-xl font-semibold text-white">Is there a free trial available?</h4>
                <p className="mt-2 text-gray-200">
                  Absolutely! We offer a 14-day free trial so you can experience the full potential of Sky without any commitments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16">
          <div className="container mx-auto text-center px-6">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-white mb-8">
              Join thousands of businesses that are transforming their workflow with Sky.
            </p>
            <button className="cursor-pointer bg-white text-blue-500 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
              Sign Up Now
            </button>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-white mb-8">
              Subscribe to our newsletter to receive the latest updates and exclusive offers from Sky.
            </p>
            <form className="flex flex-col md:flex-row justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-1/3 px-4 py-2 border border-white/50 rounded-l-lg focus:outline-none bg-transparent text-white"
              />
              <button
                type="submit"
                className="mt-4 md:mt-0 md:ml-2 px-6 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-4">
        <div className="container mx-auto text-center">
          <p className="text-white">&copy; {new Date().getFullYear()} BlueSky Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
