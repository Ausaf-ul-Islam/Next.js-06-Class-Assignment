import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const teamMembers = [
  {
    name: "James Nduku",
    role: "Marketing Coordinator",
    imageSrc: "/TeamImages/Image.png",
    links: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    name: "Joseph Munyambu",
    role: "Nursing Assistant",
    imageSrc: "/TeamImages/Image-1.png",
    links: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    name: "Joseph Ngumbau",
    role: "Medical Assistant",
    imageSrc: "/TeamImages/Image-2.png",
    links: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    name: "Erick Kipkemboi",
    role: "Web Designer",
    imageSrc: "/TeamImages/Image-3.png",
    links: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    name: "Stephen Kerubo",
    role: "President of Sales",
    imageSrc: "/TeamImages/Image-4.png",
    links: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
  {
    name: "John Leboo",
    role: "Dog Trainer",
    imageSrc: "/TeamImages/Image-5.png",
    links: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
    },
  },
];

const TeamSection: React.FC = () => {
  return (
    <section id="about-us" className="bg-[#f7f7f7] text-black py-16 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-[32px] sm:text-[48px] font-bold text-black">
          Our Team
        </h2>
        <p className="mt-4 mb-10 text-[14px] sm:text-[16px] md:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center cursor-pointer p-6"
            >
              {/* Image */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 overflow-hidden mb-4">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover "
                />
              </div>
              {/* Name and Role */}
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-black">
                {member.name}
              </h3>
              <p className="text-[14px] sm:text-[16px]">{member.role}</p>
              {/* Social Icons */}
              <div className="flex items-center justify-center mt-6 space-x-4">
                <Link
                  href={member.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#272727] hover:text-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link
                  href={member.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#272727] hover:text-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
                >
                  <FaTwitter size={24} />
                </Link>
                <Link
                  href={member.links.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#272727] hover:text-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
                >
                  <FaDribbble size={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
