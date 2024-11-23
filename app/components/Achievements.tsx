export default function AchievementsSection() {
  return (
    <section id="achievement">
      <div className="py-16 bg-white text-black">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold ">
            Our Achievements
          </h2>
          <p className="mt-4 text-[18px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-[18px] sm:text-[32px] md:text-[40px] font-bold ">+200</p>
              <p className="mt-2 text-lg font-medium ">Courses</p>
            </div>
            <div className="text-center">
              <p className="text-[18px] sm:text-[32px] md:text-[40px] font-bold ">50K</p>
              <p className="mt-2 text-lg font-medium ">Mentors</p>
            </div>
            <div className="text-center">
              <p className="text-[18px] sm:text-[32px] md:text-[40px] font-bold ">370k</p>
              <p className="mt-2 text-lg font-medium ">Students</p>
            </div>
            <div className="text-center">
              <p className="text-[18px] sm:text-[32px] md:text-[40px] font-bold ">100+</p>
              <p className="mt-2 text-lg font-medium ">Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
