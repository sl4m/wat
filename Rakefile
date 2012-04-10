ROOT_DIR     = File.expand_path(File.dirname(__FILE__))
SPEC_DIR     = File.join(ROOT_DIR, "spec")
LIB_DIR      = File.join(ROOT_DIR, "lib")
AUDIO_DIR    = File.join(ROOT_DIR, "audio")
IMAGES_DIR   = File.join(ROOT_DIR, "images")
UNPACKED_DIR = File.join(ROOT_DIR, "unpacked")

task :default => "test:run"

namespace :test do
  desc "runs unit tests"
  task :run do
    `open -a 'Google Chrome' #{SPEC_DIR}/SpecRunner.html`
  end
end

namespace :build do
  task :clean do
    rm_rf UNPACKED_DIR
    mkdir UNPACKED_DIR
    mkdir "#{UNPACKED_DIR}/audio"
    mkdir "#{UNPACKED_DIR}/images"
  end

  task :bundle => "build:clean" do
    files = Dir.glob("#{LIB_DIR}/*.js")
    header = "\"(function() {\""
    footer = "\"})();\""
    `echo #{header} >> #{UNPACKED_DIR}/wat.js`
    `cat #{files.join(' ')} >> #{UNPACKED_DIR}/wat.js`
    `echo #{footer} >> #{UNPACKED_DIR}/wat.js`
  end

  task :copy_files do
    files = %w[manifest.json wat.html]
    `cp #{files.join(' ')} #{UNPACKED_DIR}`

    audio_files = Dir.glob("#{AUDIO_DIR}/*.*")
    `cp #{audio_files.join(' ')} #{UNPACKED_DIR}/audio`

    image_files = Dir.glob("#{IMAGES_DIR}/*.png")
    `cp #{image_files.join(' ')} #{UNPACKED_DIR}/images`
  end

  task :zip do
    `zip -r wat.zip unpacked`
  end
end

desc "builds extension"
task :build  => ["build:clean", "build:bundle", "build:copy_files", "build:zip"]
