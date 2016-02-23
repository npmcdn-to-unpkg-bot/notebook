##$ git config		
  - Configure git on per project basis

####--global
  * On a per User basis

####--system
  * On a System wide basis

####user.name "_Your Name_"
  * Sets git repository name

####user.email "_Your Email_"
  * Sets git repository email

####--list
  * Lists configurations

####core.editor "_vim_"
  * Sets commit message text editor

####core.editor "_mate -wl1_"
  * Sets TextMate, waits, and moves to ln1

####core.excludesfile ~/.gitignore_global
  * (prepend _--global_) sets specific
		file as .gitignore_global in
		.gitconfig file.

####color.ui
  * Sets Color Coated Syntax



##$ git help
  * Brings up a man page for git. Can specify
		specific command after _help_.


##$ git init
  * Initializes current directory as a git project


##$ git log		
  * Outputs a log of commits along with additional
		information about them. Additional Flags:

####-n 13
  * Limits log to number of commits to 13

####--since=2012-10-15
  * Filters all commits since Oct 15, 2012

	* Works with _after_ rather than _since_.

####--until=2001-12-01
  * Filters all commits until Dec 1, 2001

	* Works with _before_ rather than _until_

####--since="_2 weeks ago_" --until="_3 days ago_"
  * Able to figure out string time periods
	  and can combine for more detailed use.
		(after 2 weeks but but before 3 days)

####--since=2.weeks	--until=3.days
  * Alternative format for above use.

####--author="_Joe_"
  * Filters all commits made by first and/or last name.

####--grep="_Init_"
  * Filters commits using grep regex

####--oneline
  * One line list of what's in log file with partial SHA

####--format=oneline
  * One line list of what's in log file with full SHA

	* Formats are _short_, _medium_, _full_, _fuller_,
		_email_, _raw_, and _oneline_.

####-3
  * Given any number will limit logs to
		that amount (e.g 3 commits)

####SHA..SHA
  * Will give a range of commits from _tree-ish_ to _tree-ish_

######SHA.. file.txt
  * Will return all commits from tree-ish to
	  head or tree-ish that pertain to _file.txt_

######-p SHA.. file.txt
  * Same as above but will also show a diff
	  pertaining to changes made to file.

####--stat --summary
  * Will give statistics and summary as to what happened
	  to each commit.

	* Can be used together or separately.

####--graph
  * Shows a graph of all commit and branches in
		a tree-like structure. Handy for visual
		representation of repo.

####--oneline --graph --all --decorate
  * A great combination that can be nice to compactly
	  but still visually represent git log.


##$ git add /file/path
  * Stages files (entire dir w/ .) to be committed


##$ git commit
  * Commits files in stage to repository

####-m "_Message Here_"
  * Specify a message for the repo commit

####-am "_Message Here_"
  * Adds all changes in working dir to stage and
	  automatically commits them.

		Note: Do not use this for untracked and deleted
		files! It only works well for changes.
		Keep in mind everything in stage will also
		be committed once executed.

####--amend /file/ -m "_Message Here_"
  * Used to change the last commit HEAD
	  is at in repo. If no file is specified
		just the commit message will be changed.


##$ git status
  * Tells user if repo matches local dir.

	* If not it will specify what files and where.


##$ git diff
  * Uses diff to compare changes between repo and
		working dir. (a/.. = repo & b/.. = pwd)

####--staged
  * Compares changes between stage and repo
		where HEAD is pointing

####--color-words
  * Colors coats words that have been changed
		placing them side by side.

####SHA
  * Will return all difference between dir at
	  that point in time to current dir.

####SHA file.txt
  * Will return differences between _file.txt_
		in current dir to that in the repo at SHA.

####SHA1..SHA2
  * Shows the changes that happened between
		two different commits.

####SHA1..SHA2 file.txt
  * Shows the changes that happened between
		two different commits to _file.txt_

####--stat --summary

####-b -w
  * _-b_ ignores single space changes

	* _-w_ ignores all spaces changes

####branchA..branchB
  * Shows the differences between two branches.


##$ git rm /file/path
  * Removes file from pwd and adds change to stage
		to be committed. Change must be committed to rm.

####--cached /file/path
  * Used in conjunction with _.gitignore_
		to ignore further changes to a file that
		was previously tracked and then added to
		_.gitignore_. File will remain in repo
		but git will not track further changes
		to the file. Must commit 'rm' once to
		finalize it being ignored.


##$ git mv /file/ /file/
  * Moves/Renames file in pwd and adds change to
		stage to be committed. Change must be committed
		to move/rename.

		Note: File has been manually deleted, moved,
		or renamed a rm and/or mv git command
		must be made followed by a commit.


##$ git checkout
  * Used to changed the working dir or stage to match
		changes from the repo. Will also be used to switch
    over to a new branch.

####branchName
  * Tells git to make current working dir match
		specified branch in repo if HEAD points to
    the same branch in both repo and pwd.

  * Used to switch between branches.

    Note: You must first commit or stash
    all changes a prior to switching branches.
    Git will alert and abort otherwise.

####-- /file/path
  * Best practice to add _--_ when checking out a specific
		file in the case that a file and branch share the same
		name. It will make file in working dir match last commit.

####<commitSHA> -- /file/
  * It will make changes to specified file matching
		commit at the SHA in _git log_ and place it in
		staging index to be committed. Reverting file at
		specific state from repo. Best practice to
		include SHA of changed commit in the message.

####-b _<new branch>_
  * Used with _git checkout_, this flag will both
    create a new branch and check it out. Using the
    files at the branch where the HEAD currently
    points.

    Note: By appending the name of a remote branch or _SHA-hash_
    after the end of the _new_branch_ name, we can create a
    local copy of that branch.


##$ git reset
  * Allows us to specify where we want HEAD to point to.
	  This will allow us to destructively commit over any
	  existing commits in front of HEAD depending on flags.

####--soft <commitSHA>
  * Does not change staging index or working dir

####--mixed <commitSHA>
  * (_Default_) Changes staging index to match repo.
		Does not change working dir.

####--hard <commitSHA>
  * Changes staging index and working directory to
		match repo.

		Note: This can be very dangerous and
		destructive if mishandled. It
		is best practice to copy the commits
		that will be overwritten in case you
		want to revert back.

####HEAD /file/
  * Takes changed file out of staging index,
		placing it back in the working dir.


##$ git revert <commitSHA>
  * Reverts all changes and/or added/deleted
		files made during specified commit. An
		option to make addition edits are also
		made possible.

####-n revert <commitSHA>
  * Same as regular revert, however it won't commit
	  the reversion right away rather just placing it
		in the staging index.


##$ git clean
  * Cleans up and removes all untracked files in working
		dir.

####-n
  * Test run that would specify what would be removed

####-f
  * Forces it to run, removing all untracked files in working dir



##.gitignore
  * A file placed in root dir of project that
	  tells git what files to ignore in working
		dir. Should be added to repo.

####path/file
  * Can simply list file names line by line

####path/dir/
  * Ignore all files in dir (add trailing slash)

####\*.jpg
  * Can use regex with or without file names
	  to filter ignored files. (e.g all .jpg)

####<Hash>
  * Comments made with hash mark _#_


### Here is a list of files and extensions that should be ignored in a git project:

  - compiled source code

  - packages and compressed files (e.g .zip, .gz, .tor)

  - logs and databases (files that constantly change)

  - operating system generated files (e.g .DS_Store)

  - user-uploaded assets (e.g images, PDFs, videos)

### For more info check out:

https://help.github.com/articles/ignoring-files

https://github.com/github/gitignore


##.gitignore_global
  * A file created in user dir.

	* Ignores files in all repos.

	* Settings not tracked in repo.

	* User-specific instead of repo.
		Reference _git config_ section
		after creating _.gitignore_global_
		in User dir to properly set
		in _.gitconfig_.


##.gitkeep
  * Because git does not track empty directories
	  this small empty file is placed in an
	  empty dir and used to force git to
		track it.

##$ git ls-tree
  * Lists the contents of a given tree object

###tree-ish
  * Will list contents at that given tree-ish
		as _trees_ (dirs) or _blogs_ (files).
		You can look inside of folders further given
		at any point given there SHA.


####tree-ish
  * A term used in documentation that refers
		to something that points at a commit.

	* These are tree-ish things that can be
		used:

		- Full SHA-hash
		- Short SHA-hash (atleast 8-10 chars)
		- HEAD Pointer
		- Branch/tag Reference
		- Ancestry (Parent Commit)

###HEAD^ or HEAD~
  * Both refer to the parent of head

###acd45^^^ or acd45~3
  * Both refer to the great-grandparent of acd45



##$ git show
  * Shows the diff of changes at a given
		commit point. Can be used w/ _format_.
		If used on a blog (file) or tree (dir)
		after _git ls-tree_ it will show contents
		of file or folder.

####SHA
  * Shows diff of commit at that SHA

##$ git branch
  * Shows all branches in current repository.

####"_new_branch_"
  * Providing _git branch_ with a name will create
    a new branch with that name.

    Note: By appending the name of a remote branch or _SHA-hash_
    after the end of the _new_branch_ name, we can create a
    local copy of that branch.

####--merged
  * Shows all branches completely included (_merged_)
    with current branch (where HEAD is pointing).

####-m "_old branch name_" "_new branch name_"
  * This flag will change an existing branch
    name to the name specified after it.

####-d "_branch to delete_"
  * Will delete the specified branch if it is empty.

####-D "_branch to delete_"
  * Will delete the specified branch with all contents.

    Note: You must not be on current
    branch when removing it, otherwise
    and error will be thrown.

####-r
  * Lists all of the remote branches for the git project.

####-a
  * Lists both remote and local branches for the git project.

##$ git merge "_target branch_"
  * This will merge the _target branch_ with the
    branch that you are currently on.

    Note: That because merges can get a bit complicated
    and messy, it is best practice to make sure that the
    working directory is clean (either committed or stashed)

####--no-ff "_target branch_"
  * Tells git to force a true merge with commit message
    rather than a fast-forward commit.
    (See _fast-forward vs. true merge_ below)

####--ff-only "_target branch_"
  * Tells git to only merge branches if a fast-forward
    merge can happen, otherwise abort.
    (See _fast-forward vs. true merge_ below)

####--abort
  * Aborts a merge that is currently in conflict.
    (See _Resolving Merge Conflicts_ below)

###Fast-foward vs. True Merge
  * A _fast-forward merge_ is a merge that does not require
    a commit or a commit message because the branches being
    merged have no conflicting changes. The _target branch_
    only has changes beyond the tip of the branch it will
    merge with.

  * A _true merge_ involves a commit and a commit message
    because some of the differences between the branches
    must be consolidated.

###Merge Conflicts
  * When merging branches two branches that make changes
    to the same line or lines of a file, a merge conflict
    occurs. Git will not allow any merging to take place
    until the conflicts are resolved.

  * The _git status_ command will notify you of the
    conflicting files, and mark the lines within the
    file with symbols to show where the conflicts occur.

###Resolving Merge Conflicts
  * There are three approaches to resolving merge conflicts:
    - Abort the merge
    - Use a merge tool:
      - _git mergetool_ will list all tools available.
      - You can add tools to the _.gitconfig_
    - Resolve the conflicts manually:
      1. Open conflicted file
      2. Locate markers for changes (<<< | >>>> | ====)
      3. Look at diff of commits for more detail of changes.
      4. Make necessary changes
      5. Remove the git markers and extra text.
      6. Inspect results and make sure you approve
      7. _git add_ modified file(s).
      8. _git commit_ to complete the merge. (message optional)
      9. You can then use _git log --graph --oneline --all --decorate_ to see a full graph of commit tree.

###Strategies to Reduce Merge Conflicts
  * Keep lines as short as possible because it will make it
    easier to spot changes within lines.

  * Keep commits small and focused so that it is very clear
    and easy to follow modifications.

  * Beware of stray edits to whitespace (spaces, tabs, returns)
    because it can slow the merging process unnecessarily.

  * Merge often so that branches don't become too different from
    each other. This will save a lot of time down the line.

  * Similar to above, track changes to master, so that other
    branches don't stray too far before being merged back to
    main branch.


##$ git stash

####save "_message goes here_"
  * This will save the state of the working branch without
    committing any changes.

####list
  * This will return a list of the _stash_ in a list-like
    manner with each message listed preceded by a _stash@{#}_
    where _#_ refers to the index of each _stash_.

####show _stash@{#}_
  * Will show a diff stat of the changes that had taken place
    at the _stash_. (Append _-p_ flag after _show_ for a more
    detailed diff).

####pop _stash@{#}_
  * Takes from stash and places the modification in whatever
    the current working directory (_branch_) is, while also
    removing the change from the stash. If no stash number is
    identified the first one will be removed by default.

####apply _stash@{#}_
  * Like _git stash pop_, however, does not remove the change
    from the stash but rather adds a copy to the current
    working directory (_branch_).

####clear
  * This will clear out and delete everything from the stash.
    Be very careful as this is extremely destructive.

####drop _stash@{#}_
  * This will remove the specified modifications from the stash.


###Git Stash
  * A place provided by git to temporarily store files without
    having to commit them to a repository.

  * The _stash_ is not part of the _staging index_, _repository_,
    or _working directory_ but rather its own entity.

  * Although we do store states (snapshots) in a _stash_, they
    do not involve commits.

  * There is no _SHA_ with a _stash_.

  * A _stash_ is most often used when switching from one branch
    to another, where you do not want to commit the changes before
    switching over.

  * Make note that the _stash_ is available all the time in any
    branch.


###Remotes
  * A _Remote_ repository allows for collaboration on a project
    via the git interface.

  * You can have multiple _remotes_ all pointing to the same
    git project.

##$ git remote
  * Much like _git branch_, this command will list all of the
    remote branches it can find within a git project.

####add _<alias> <url>_
  * This will create a new remote called _<alias>_ that points to
    _<url>_.

    Note: By convention most people use _origin_ as the _<alias>_
    of their primary remote, but it can be any name you want.

####-v
  * Display information regarding the _<url>_ that will be used
    for fetching and pushing.

####rm _<alias>_
  * Will remove the specified remote.

##$ git push _<alias>_ _<branchName>_
  * Will push a working branch (_<branchName_) to the remote
    branch (_<alias>_).

####-u
  * This will track the remote branch along with push code to
    remote branch.

    Note: It is generally best practice to use the _-u_ option
    when pushing to a remote branch. If branch has already been
    tracked you can simply use *<git push>*.

####origin :_<remote branch>_
  * Will delete the remote branch from Github or where ever it
    was hosted.

####origin --delete _<remote branch>_
  * Same as above, it will delete the specified remote branch.

##$ git clone _<url>_ _<folderName>_
  * Will create a local copy of the remote repository at _<url>_
    in the specified _<folderName>_.

    Note: The _<folderName>_ is completely optional and can be
    used when an existing project with the same name is already
    found.

####-b _<branchName>_
  * By default _<git clone>_ will clone just the master branch of
    the project, but this option will let you specify a different
    branch to clone.

##$ git fetch _<github/remote branchname>_
  * Will sync the specified remote branch with the one HEAD points
    to in the local project.

    Note: _<remote branchname>_ is optional if only one remote
    branch exists for the project.

###Fetching Guidelines
  * **Fetch often** because _git fetch_ is non-destructive, it
    is a good idea to use it frequently. It will simply keep
    the remote and local repositories in sync.

  * **Fetch before you work**, that way any changes that were
    made by collaborators are updated within your local copy of
    the project.

  * **Fetch before you push**, that way you know about other
    changes before pushing new ones.

  * **Fetch before you merge with remote branch**, so that local
    local copy of branch reflects remote before any merge conflicts
    are resolved.

##$ git pull _<github/remote branchname>_
  * This is the equivalent of doing _$ git fetch_ and _$ git merge_.

###Collaborating with Open Source
  * It's best practice to check the _Network_ and _Issues_ tab to
    make sure that the changes that you want to make are not already
    being resolved.

  * Once ready, post an _Issue_ so that other users know that you
    will be working on that particular fix or change.

  * Then fork the project which will create your own version of the
    project on your GitHub account.

  * You make necessary changes on that fork and push them up to
    GitHub.

  * A pull request is then made on the original GitHub project
    page with a message about the changes made.

###Git Aliases
  * Sometimes setting up an alias for a command can greatly speed up
    productivity. However, it is important to take note of the actual
    command and not mistake it for the alias.

  * Some common aliases used are:
    - alias.co -> checkout
    - alias.ci -> commit
    - alias.br -> branch
    - alias.df -> diff
    - alias.dfs -> "diff --staged"
    - alias.logg -> "log --graph --decorate --oneline --abbrev-commit --all"

##$ git config --global alias._<alias>_ "_<actual command>_"
  * This will set up a global alias for the specified command.

  Note: The double quotes is optional except when working with
  commands with spaces.

###GitHub Password Caching
  * You can [set up a keychain](https://help.github.com/articles/caching-your-github-password-in-git/) with your GitHub account.

  * You can [set up SSH Keys](https://help.github.com/articles/generating-an-ssh-key/) with your GitHub account.

  Note: If you are using SSH keys make sure you use the correct url
  from the GitHub repository (SSH rather than HTTP).

###Graphical Git Interfaces
  * Here is a list of graphical platforms that work with Git:
    - [GitX](http://gitx.org) (Mac)
    - [GitHub](http://mac.github.com) (Mac & Windows)
    - [SourceTree](http://sourcetreeapp.com) (Mac)
    - [Tower](http://git-tower.com)
    - [SmartGit](http://syntevo.com/smartgit) (Mac & Windows)
    - [Gitbox](http://gitboxapp.com) (Mac)
    - [TortoiseGit](http://code.google.com/p/tortoisegit) (Windows)
    - [Git Extensions](http://code.google.com/p/gitextensions) (Windows)

  * For a more comprehensive list check out this link to the
    [Git Wiki] (https://git.wiki.kernel.org/index.php/InterfacesFrontendsAndTools)
