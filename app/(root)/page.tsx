import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { dummyInterviews } from "@/public/constants";
import InterviewCard from "@/components/InterviewCard";

const page = () => {
  return (
    <>
      {/* Welcome Card */}
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            Get Interview-Ready with AI-Powered Practice &
            Feedback
          </h2>
          <p className="text-lg">
            Practice on real interview questions & get
            instant Feedback
          </p>
          <Button
            asChild
            className="btn-primary max-sm:w-full">
            <Link href="/interview">
              Start an Interview
            </Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      {/* User's Interviews */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {/* <p>You haven&apos;t taken any interviews yet</p> */}
          {dummyInterviews.map((interview) => (
            <InterviewCard
              {...interview}
              key={interview.id}
            />
          ))}
        </div>
      </section>
      {/* Available Interviews */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {/* <p>There are no interviews available</p> */}
          {dummyInterviews.map((interview) => (
            <InterviewCard
              {...interview}
              key={interview.id}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
